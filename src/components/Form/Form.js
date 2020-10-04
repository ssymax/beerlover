import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import RadioForm from "./RadioForm";

const types = {
  beers: "beers",
  article: "article",
  note: "note",
};

const descriptions = {
  beers: "beers",
  article: "article",
  note: "note",
};

class Form extends React.Component {
  state = {
    type: types.beers,
    name: "",
    image_url: "",
    link: "",
    description: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.radioForm}>
                <RadioForm
                  id={types.beers}
                  checked={type === types.beers}
                  changeFn={() => this.handleRadioButtonChange(types.beers)}
                >
                  Beers
                </RadioForm>
                <RadioForm
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </RadioForm>
                <RadioForm
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </RadioForm>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.name}
                name="name"
                label="Name"
                maxLength={30}
              />
              {type === types.beers ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image_url}
                  name="image_url"
                  label="Image link"
                />
              ) : null}
              {type === types.article ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label="Source link"
                />
              ) : null}
              <Input
                tag="textarea"
                onChange={this.handleInputChange}
                value={this.state.description}
                name="description"
                label="Description"
              />
              <Button type="submit">add new beer</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
