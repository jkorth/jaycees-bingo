open Utils;

let component = ReasonReact.statelessComponent("Board");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h3 className="font-black text-3xl text-black"> {"Board" |> str} </h3>
    </div>,
};