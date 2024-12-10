const React = require("react");

class DoStuff extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey hey hey, there's like plants and stuff, feels like HOME</h1>
        <nav>
          <a href="/">HOME</a>
        </nav>
        <form action="/tree/:id/edit" method="PATCH">
          Name:
          <input type="text" name="name" />
          <br />
          Purpose:
          <input type="text" name="purpose" />
          <br />
          Height:
          <input type="number" name="height" />
          <br />
          Diameter:
          <input type="number" name="diameter" />
          <br />
          Age:
          <input type="number" name="ageOfTree" />
          <br />
          Is the tree deciduous?
          <input type="checkbox" name="leaves" />
          <br />
          Please enter water requirements:
          <br />
          <textarea name="waterRequirements" id=""></textarea>
          <br />
          Fertilizer:
          <input type="text" name="fertilizer" />
          <br />
          Date Planted:
          <input type="text" name="datePlanted" />
          <br />
          <button type="submit">Edit Tree</button>
        </form>
      </div>
    );
  }
}

module.exports = DoStuff;
