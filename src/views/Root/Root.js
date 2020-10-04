import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import BeersView from '../BeersView/BeersView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AppContext from '../../context';

class Root extends React.Component {


  state = {
      beers: [],
      article: [],
      note: [],
      isModalOpen: false,
  }

  async componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({beers: data});
  }


  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [newItem, ...prevState[newItem.type]]
    }))

    this.closeModal();
  };
    /*this.setState(prevState => ({
      items: [...prevState.items, newItem]
    })
    
    )
    
    e.target.reset(); //reset of form

    /*or 
     items: [...this.state.items, newItem]
    })*/
    

  openModal = () => {
    this.setState({ isModalOpen: true, })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false, })
  }

  render() {

    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    }

    return (
      <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Header openModalFn={this.openModal} />
        <Switch>
          <Route exact path="/" component={BeersView} />
          <Route path="/articles" component={ArticlesView} />
          <Route path="/notes" component={NotesView} />
        </Switch>
        { isModalOpen && <Modal closeModalFn = {this.closeModal} /> }
      </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;