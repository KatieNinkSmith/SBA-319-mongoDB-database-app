const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button>Display Trees</button>
          <button>Display Annuals</button>
          <button>Display Perennials</button>
        </div>
        <form class="addTree" action="/trees/create" method="POST">
          <input type="text" name="name" />
          <input type="text" name="purpose" />
          <input type="number" name="height" />
          <input type="number" name="diameter" />
          <input type="number" name="ageOfTree" />
          <input type="checkbox" name="leaves" />
          <textarea name="waterRequirements" id=""></textarea>
          <input type="text" name="fertilizer" />
          <input type="text" name="datePlanted" />
          <button type="submit">Submit Tree</button>
        </form>
        <form class="editTree" action="/tree/:id/edit">
          <input type="text" name="name" />
          <input type="text" name="purpose" />
          <input type="number" name="height" />
          <input type="number" name="diameter" />
          <input type="number" name="ageOfTree" />
          <input type="checkbox" name="leaves" />
          <textarea name="waterRequirements" id=""></textarea>
          <input type="text" name="fertilizer" />
          <input type="text" name="datePlanted" />
          <button type="submit">Edit Tree</button>
        </form>
      </div>
    );
  }
}

module.exports = New;
