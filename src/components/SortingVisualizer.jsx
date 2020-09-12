import React from "react";
class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  /**
   * this method will reset global array
   */

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

SortingVisualizer.propTypes = {};

export default SortingVisualizer;

/**
 *
 * @param {int} min
 * @param {int} max
 */

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
