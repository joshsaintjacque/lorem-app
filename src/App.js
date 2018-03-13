import React, { Component } from 'react';
import axios from 'axios';
import Lorem from './components/Lorem/Lorem';
import Select from './components/Select/Select';
import NumberField from './components/NumberField/NumberField';
import './App.css';
import FlavorFilter from './components/FlavorFilter/FlavorFilter';

class App extends Component {
  state = {
    flavor: 'bacon',
    paragraphs: "4",
    format: 'text',
    text: ''
  }

  componentWillMount() {
    this.getLoremText();
  }

  getLoremText() {
    const { paragraphs, format, flavor } = this.state;
    let requestUrl;
    switch (flavor) {
      case 'bacon':
        requestUrl = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&format=${format}`;
        break;
      case 'dino':
        requestUrl = `http://dinoipsum.herokuapp.com/api/?format=${format}&paragraphs=${paragraphs}`;
        break;
      case 'lit':
        requestUrl = `https://litipsum.com//api/${paragraphs}`
        if(format === 'html') requestUrl += '/p'
        if(format === 'json') requestUrl += '/json'
        break;
      default:
        throw new Error(`Unsupported lorem flavor ${flavor}`);
    }

    axios.get(requestUrl).then(({ data }) => {
      if (flavor === 'lit' && format === 'json') {
        this.setState({ text: data.text })
      } else if (flavor === 'dino' && format === 'json') {
        this.setState({ text: data.map(paragraph => paragraph.join(' ')) })
      } else {
        this.setState({ text: data })
      }
    });
  }

  changeFormat(format) {
    this.setState({ format }, this.getLoremText);
  }

  changeParagraphs(paragraphs) {
    this.setState({ paragraphs }, this.getLoremText);
  }

  changeFlavor(flavor) {
    this.setState({ flavor }, this.getLoremText);
  }

  render() {
    const { flavor, paragraphs, format, text } = this.state;
    return (
      <div className="App container">
        <h1 className="text-center">Generate Some Lorem Ipsum</h1>
        <hr />
        <form className="form-inline">
          <FlavorFilter flavor={flavor} onChange={this.changeFlavor.bind(this)} />

          <div className="form-group">
            <label>Paragraphs &nbsp;</label>
            <NumberField
              value={Number.parseInt(paragraphs, 10)}
              onChange={this.changeParagraphs.bind(this)}
            />
          </div>

          <div className="form-group">
            <label>Format &nbsp;</label>
            <Select
              value={format}
              options={[
                { value: "text", text: "Text" },
                { value: "html", text: "HTML" },
                { value: "json", text: "JSON" }
              ]}
              onChange={this.changeFormat.bind(this)}
            />
          </div>
        </form>
        <Lorem value={text} />
      </div>
    );
  }
}

export default App;
