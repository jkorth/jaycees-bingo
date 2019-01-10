open Utils;

let component = ReasonReact.statelessComponent("Game");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h2 className="font-black text-black text-4xl"> {"Game" |> str} </h2>
      <Board />
    </div>,
};