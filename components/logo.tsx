import {
  Component,
} from "react";

export default class Logo extends Component<any, any> {

  private containerRef: HTMLDivElement;
  
  public componentDidMount() {
    this.hide();
  }

  public show = () => {
    this.containerRef.style.display = "inline";
  }

  public hide = () => {
    this.containerRef.style.display = "none";
  }

  public render() {
    return (
      <div
        ref={(ref) => {this.containerRef = ref; }}
      >
        <img src="./static/vdw_logo.svg" />

        <style jsx>{`
          div {
            position: absolute;
            left: 3%;
            top: 3%;
            width: 10%;
          }

          img {
            width: 100%;
            height: auto
          }
        `}</style>
      </div>
    );
  }
}
