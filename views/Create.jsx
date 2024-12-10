const React = require("react");

class Create extends React.Component {
  render() {
    const trees = this.props.foundTrees;
    return (
      <div>
        <h1>Hey hey hey, there's like plants and stuff, feels like HOME</h1>
        <ul>
          {trees.map((tree, i) => {
            return (
              <li key={tree._id}>
                The <a href={`api/trees/${tree._id}`}>{tree.name}</a> is{" "}
                {tree.purpose} <br></br>
                {tree.dataPlanted}
                <br />
                <form
                  action={`api/trees/${tree._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
        <form action="/api/trees/create" method="POST">
          <h4>Enter New Tree</h4>
          Name:
          <input type="text" name="name" />
          <br />
          <label>Purpose: </label>
          <select name="purpose" defaultValue={"Canpoy"}>
            <option>Fruiting</option>
            <option>Canopy</option>
            <option>Flowering</option>
            <option>Perimiter</option>
            <option>Shrub</option>
          </select>
          <br />
          Height:
          <input type="number" name="height" min="0" />
          <br />
          Diameter:
          <input type="number" name="diameter" min="0" />
          <br />
          Age:
          <input type="number" name="ageOfTree" min="0" />
          <br />
          <label>Is the tree deciduous of coniferous?</label>
          <br />
          <select name="leaves" defaultValue={"Coniferous"}>
            <option>Deciduous</option>
            <option>Coniferous</option>
          </select>
          <br />
          Please enter water requirements:
          <br />
          <textarea name="waterRequirements" id=""></textarea>
          <br />
          Fertilizer:
          <input type="text" name="fertilizer" />
          <br />
          Date Planted:
          <input type="Date" defaultValue="" name="datePlanted" />
          <br />
          <button>Submit Tree</button>
        </form>
      </div>
    );
  }
}

module.exports = Create;
