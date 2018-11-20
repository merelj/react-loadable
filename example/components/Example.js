import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import delay from '../utils/delay';
import path from 'path';

const LoadableNested = Loadable({
  loader: () => import('./ExampleNested'),
  loading: Loading,
});


export default class Example extends React.PureComponent {
  state = { showLoading: true }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoading: false })
    }, 5000)
  }

  render() {
    return (
      <div>
        <h1>Hello from a loadable component</h1>
        <LoadableNested showLoading={this.state.showLoading}/>
      </div>
    );
  }
}
