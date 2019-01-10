open Utils;

let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h1 className="text-center font-black text-black text-5xl">
        {"Kearney Jaycees Bingo" |> str}
      </h1>
      <Game />
    </div>,
};