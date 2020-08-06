import * as React from 'react';

export interface Props {
    onEnteredText: (something: any) => void;
}

class TextInput extends React.Component<Props, {}> {
  render() {
    return (<div>
        My text Area
      <textarea onChange={this._onChange}>

      </textarea>
    </div>
    );
  }

  private _onChange = (event): void => {
    console.log(event.target.value);
    this.props.onEnteredText(event.target.value)
  }
}

export default TextInput;