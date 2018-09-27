const W = 3840;
const H = 2160;


import {
  Component,
} from "react";
import Head from "next/head";

import Global from "./global";

import {
  MessageTypes,
  IMessagePackage,
  ILayoutGeneratorCongfig,
} from "../components/types";

import CirclesViewer from "../components/circleViewer/circleViewer";
import TextViewer from "../components/textViewer/textViewer";

import Logo from "../components/logo";
import DividerLines from "../components/dividerLines";

import {TimelineLite, TimelineMax} from "gsap";

import colors from "../components/colors";
import layouts from "../components/presets";

export default class Index extends Component<any, any> {

  private controllerWindow: Window;
  private circlesViewerRef: CirclesViewer;
  private textViewerRef: TextViewer;

  private logoRef: Logo;
  private linesRef: DividerLines;

  private fullscreenButtonRef: HTMLDivElement;
  private containerRef: HTMLDivElement;

  public componentDidMount() {
    // this.openControllerWindow();

    window.addEventListener("message", this.onReceiveMessage);

    window.addEventListener("keydown", (e) => {
      if (e.key === "h") { // h
        this.openControllerWindow();
      } else if (e.key === "f") { // f
        this.toggleFullscreen();
      }
    });

    window.addEventListener("resize", () => {
      this.fitViewport();
    });
    this.fitViewport();
    this.resolutionCallout();

    this.startInstallation();
  }

  public componentWillUnmount() {
    window.removeEventListener("message", this.onReceiveMessage);
    this.controllerWindow.close();
  }

  private openControllerWindow = () => {
    this.controllerWindow = window.open(
      "./controller",
      "controller",
      "titlebar=0,close=0,menubar=0,location=0,status=0,width=300,height=825,left=0,top=0,dependent=1,resizable=1,scrollbars=1",
    );
  }

  private toggleFullscreen() {
    if (document.webkitFullscreenEnabled) { // Chrome, Opera, Safari
      if (!document.webkitFullscreenElement) {
        document.querySelector("body").webkitRequestFullscreen();
      } else { document.webkitExitFullscreen(); }
    // @ts-ignore
    } else if (document.mozFullScreenEnabled) { // Firefox
    // @ts-ignore
      if (!document.mozFullScreenElement) {
      // @ts-ignore
        document.querySelector("body").mozRequestFullScreen();
      } else {
        // @ts-ignore
        document.mozCancelFullScreen();
      }
    } else if (document.fullscreenEnabled) { // Standard, Edge
      if (!document.fullscreenElement) {
        document.querySelector("body").requestFullscreen();
      } else { document.exitFullscreen(); }
    }
  }

  private resolutionCallout() {
    let c = document.querySelector('canvas');
    console.log(`RENDERING ${c.width} x ${c.height}`);
  }

  // @ts-ignore
  private onSendMessage = (message: IMessagePackage) => {
    this.controllerWindow.postMessage(message, "*");
  }

  private onReceiveMessage = (event) => {

    const messagePackage = event.data as IMessagePackage;

    if (messagePackage.type === MessageTypes.data) {
      console.log("data", messagePackage.data);
    }

    switch (messagePackage.type) {
      case MessageTypes.newLayout:
        this.circlesViewerRef.newRandomLayout(messagePackage.data.seed, messagePackage.data.growTime);
        break;

      case MessageTypes.removeCircles:
        this.circlesViewerRef.removeCircles(messagePackage.data);
        break;

      case MessageTypes.makeNonStatic:
        this.circlesViewerRef.makeCirclesNonStatic();
        break;

      case MessageTypes.changeGrainDensity:
        this.circlesViewerRef.changeGrainDesity(messagePackage.data);
        break;

      case MessageTypes.changeGrainScale:
        this.circlesViewerRef.changeGrainScale(messagePackage.data);
        break;

      case MessageTypes.changeGrainAngle:
        this.circlesViewerRef.changeGrainAngle(messagePackage.data);
        break;

      case MessageTypes.newText:
        this.textViewerRef.newText(messagePackage.data);
        // this.startTextLoop(messagePackage.data)
        break;

      case MessageTypes.newTextWithParams:
        // this.textViewerRef.newText(messagePackage.data);
        this.startTextLoop(messagePackage.data.text)
        this.textViewerRef.updateTextSize(parseInt(messagePackage.data.size, 10));
        break;

      case MessageTypes.startScreensaver:
        this.startScreensaverLoop();
        break;

      case MessageTypes.startInstallation:
        this.startInstallation(messagePackage.data.mode, messagePackage.data.loop);
        break;

      case MessageTypes.stopInstallation:
        this.stopInstallation();
        break;

      case MessageTypes.dropText:
        this.textViewerRef.dropText();
        break;

      // case MessageTypes.closeBounds:
      //   this.circlesViewerRef.closeWorldBounds();
      //   this.textViewerRef.closeWorldBounds();
      //   break;

      case MessageTypes.makeFullscreen:
        this.fullscreenButtonRef.style.display = "flex";
        break;

      case MessageTypes.changeBGColor:
        // document.body.style.backgroundColor = messagePackage.data;
        this.circlesViewerRef.changeBgColor(messagePackage.data);
        break;

      case MessageTypes.changeFGColor:
        this.circlesViewerRef.changeFrontColor(messagePackage.data);
        break;

      case MessageTypes.changeGravityCircles:
        this.circlesViewerRef.updateGravity(messagePackage.data);
        break;

      case MessageTypes.changeGravityText:
        this.textViewerRef.updateGravity(messagePackage.data);
        break;

      case MessageTypes.changeFrictionCircles:
        this.circlesViewerRef.updateFriction(messagePackage.data);
        break;
      case MessageTypes.changeFrictionText:
        this.textViewerRef.updateFriction(messagePackage.data);
        break;

      case MessageTypes.changeRestitutionCircles:
        this.circlesViewerRef.updateRestitution(messagePackage.data);
        break;
      case MessageTypes.changeRestitutionText:
        this.textViewerRef.updateRestitution(messagePackage.data);
        break;

      case MessageTypes.updateLayoutConfig:
        this.circlesViewerRef.updateLayoutConfig(messagePackage.data);
        break;

      case MessageTypes.setBottomCircles:
        if (messagePackage.data === true) {
          this.circlesViewerRef.closeBottom();
        } else {
          this.circlesViewerRef.openBottom();
        }
        break;

      case MessageTypes.setBottomText:
        if (messagePackage.data === true) {
          this.textViewerRef.closeBottom();
        } else {
          this.textViewerRef.openBottom();
        }
        break;

      case MessageTypes.updateTextSize:
        this.textViewerRef.updateTextSize(parseInt(messagePackage.data, 10));
        break;
      case MessageTypes.updateTextStrokeColor:
        this.textViewerRef.updateStrokeColor(messagePackage.data);
        break;
      case MessageTypes.updateTextFillColor:
        this.textViewerRef.updateFillColor(messagePackage.data);
        break;
      case MessageTypes.updateTextShowFill:
        this.textViewerRef.updateTextShowFill(messagePackage.data);
        break;

      case MessageTypes.toggleLogoVisibility:
        if (messagePackage.data === true) {
          this.logoRef.show();
        } else {
          this.logoRef.hide();
        }
        break;

      case MessageTypes.toggleLinesVisibility:
        if (messagePackage.data === true) {
          this.linesRef.show();
        } else {
          this.linesRef.hide();
        }
        break;
    }
  }

  private t_textloop: TimelineLite;

  public stopTextLoop() {
    if (this.t_textloop) { this.t_textloop.kill(); }
  }

  public startTextLoop(text:string) {
    console.log('text loop:', text);
    this.stopTextLoop();
    this.stopScreensaverLoop();
    this.circlesViewerRef.newRandomLayout("", 1);
    this.t_textloop = new TimelineLite();
    let t = this.t_textloop;
    let loopCounter = 0;

    t.add(() => {
      this.textViewerRef.closeBottom();
      this.textViewerRef.newText(text);
    });

    t.add(() => {
      this.textViewerRef.openBottom();
    }, 6);

    t.add(() => {}, 8);

    t.eventCallback('onComplete', () => {
      if (++loopCounter >= 2) {
        loopCounter = 0;
        this.circlesViewerRef.newRandomLayout("", 1);
      }
      t.restart();
    });
  }

  private t_ssloop: TimelineLite;

  public stopScreensaverLoop() {
    if (this.t_ssloop) { this.t_ssloop.kill(); }
  }

  public startScreensaverLoop() {
    console.log('starting screensaver');
    this.stopScreensaverLoop();
    this.stopTextLoop();
    this.textViewerRef.clearText();
    this.t_ssloop = new TimelineLite();
    let t = this.t_ssloop;

    let grav = { x:0, y:1, scale: 10/10000 };
    let shiftGrav = new TimelineLite();
    shiftGrav.eventCallback('onUpdate', () => {
      this.circlesViewerRef.updateGravity(grav);
    });
    function newShift(duration=24, shifts=6) {
      const minGrav = 3/10000;
      const maxGrav = 6/10000;
      shiftGrav.clear();
      shiftGrav.set(grav, {
        x: Math.random()-0.5, y: Math.random()-0.5,
        scale: minGrav+Math.random()*(maxGrav-minGrav)
      });
      for (let i=0; i<shifts; i++) {
        shiftGrav.to(grav, duration/shifts, {
          x: Math.random()-0.5,
          y: Math.random()-0.5,
          scale: minGrav+Math.random()*(maxGrav-minGrav)
        });
      }
    }
    newShift();

    t.add(() => {
      this.circlesViewerRef.closeBottom();
      this.circlesViewerRef.newRandomLayout("", 3);
    });
    t.add(()=>{
      this.circlesViewerRef.makeCirclesNonStatic();
      // this.circlesViewerRef.updateGravity({
      //   x: Math.random()-0.5, y: Math.random()-0.5,
      //   scale: 2/10000
      // });
    }, 3);
    t.add(shiftGrav);
    t.add(() => {
      this.circlesViewerRef.openBottom();
      this.circlesViewerRef.updateGravity({
        x: 0, y: 1, scale: 15/10000
      });
    }, 27);
    t.add(() => {}, 30);
    t.eventCallback('onComplete', () => {
      newShift();
      t.restart();
    });
  }



  private pickColorConfig() {
    let keys = Object.keys(colors);
    let idx = Math.floor(Math.random()*keys.length);
    return colors[keys[idx]];
  }
  
  //@ts-ignore
  private pickColorConfigRange(from:number, toIncl:number) {
    let keys = Object.keys(colors);
    let idx = Math.floor( from + Math.random()*(toIncl-from+1) );
    console.log("picked idx", idx);
    return colors[keys[idx]];
  }

  private setRandomColors() {
    let c = this.pickColorConfig();
    this.circlesViewerRef.changeBgColor(c.bgColor);
    this.circlesViewerRef.changeFrontColor(c.circleColor);
  }

  private setRandomLayout() {
    let l = this.pickLayoutConfig();
    l.useW = 1.0;
    l.useH = 1.0;
    this.circlesViewerRef.updateLayoutConfig(l);
  }

  private setRandomGrain() {
    this.circlesViewerRef.changeGrainDesity(this.rnd(-2.0, -0.1));
    this.circlesViewerRef.changeGrainAngle(this.rnd(0, 2*Math.PI));
  }
  
  //@ts-ignore
  private setRandomGravity() {
    this.circlesViewerRef.updateGravity({
      x: this.rnd(-1, 1),
      y: this.rnd(-1, 1),
      scale: this.rnd(3/10000, 6/10000)
    });
  }

  private setFallGravity() {
    this.circlesViewerRef.updateGravity({
      x: 0, y: 1,
      scale: this.rnd(6/10000, 15/10000)
    });
  }

  private growNewLayout(time = 0) {
    this.circlesViewerRef.newRandomLayout("", time);
  }

  // @ts-ignore
  private randomLayoutConfig(): ILayoutGeneratorCongfig {
    return {
      divisionStep: this.rndInt(3, 20),
      cellDivide: this.rnd(0.1, 0.9),
      cellFill: this.rnd(0.1, 0.9),
      cellTwoDivisions: this.rnd(0, 1),
      showPartial: false,
      useW: 1.0,
      useH: 1.0
    };
  }

  private pickLayoutConfig(): ILayoutGeneratorCongfig {
    let keys = Object.keys(layouts);
    let idx = Math.floor(Math.random()*keys.length);
    return layouts[keys[idx]];
  }

  private rnd(min, max) {
    return min + Math.random() * (max-min);
  }
  private rndInt(min, max) {
    return Math.floor( this.rnd(min, max));
  }
  private decide(chances = [0.5, 0.4], scale=1.0) {
    let sums = [];
    let sum = 0;
    for (let i=0; i<chances.length; i++) {
      sum += chances[i] / scale;
      sums.push(sum);
    }
    let r = Math.random();
    for (let i=0; i<sums.length; i++) {
      if (r < sums[i]) return i;
    }
    return sums.length;
  }

  private t_iloop: TimelineLite;

  public stopInstallation() {
    if (this.t_iloop) { this.t_iloop.kill(); }
  }

  public startInstallation(mode = 0, loop = true) {
    console.log('installation: mode', mode > 0 ? mode : 'auto');
    this.stopInstallation();
    this.t_iloop = new TimelineMax();
    let t = this.t_iloop;

    let m = mode;
    if (mode <= 0) { // auto mode
      m = 1 + this.decide([60,15,25], 100);
      console.log('auto chose mode', m);
    }

    switch (m) {
    case 1: // "normal"
      t.add(() => {
        this.setRandomColors();
        this.setRandomLayout();
        this.setRandomGrain();
        this.growNewLayout(this.rnd(0.5, 3.0));
      });
      t.add(() => {}, this.rndInt(3,5));
      t.repeat( this.rndInt(4,6) );
      break;

    case 2: // "quickfire"
      t.add(() => {
        this.setRandomColors();
        this.setRandomLayout();
        this.setRandomGrain();
        this.growNewLayout();
      });
      t.add(() => {}, this.rnd(0.3, 0.7));
      t.repeat( this.rndInt(9,14) );
      break;

    case 3: // "slow drop"
      t.add(() => {
        this.setRandomColors();
        this.setRandomLayout();
        this.setRandomGrain();
        this.growNewLayout(this.rnd(1, 5.0));
      });
      t.add(() => {
        // this.setRandomGravity();
        this.setFallGravity();
        this.circlesViewerRef.makeCirclesNonStatic();
      }, this.rnd(2, 3));
      t.add(() => {}, this.rnd(5,20));
      break;
    }

    if (mode <= 0) {
      t.eventCallback('onComplete', () => {
        console.log("looping: auto mode");
        this.startInstallation(0, false);
      });
    } else if (loop) {
      t.eventCallback('onComplete', () => {
        console.log("looping: mode " + mode);
        this.startInstallation(mode, true);
      });
    } else {
      t.eventCallback('onComplete', () => {
        console.log("complete: mode " + mode);
      });
    }
  }



  private fitViewport() {
    if (window.innerWidth/window.innerHeight < W/H) {
      // fit width
      this.containerRef.style.width = window.innerWidth + "px";
      this.containerRef.style.height = (window.innerWidth / (W/H)) + "px";
    } else {
      // fit height
      this.containerRef.style.width = window.innerHeight * (W/H)+ "px";
      this.containerRef.style.height = window.innerHeight + "px";
    }

  }

  public render() {
    return (
      <Global>
        <Head>
          <title>Vienna Design Week 2018</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>

        <div className="cover">
        <div className="container"
          ref={(ref) => {this.containerRef = ref;}}
          style={{
            // width: "100vw",
            // height: "100vh",
            width: W,
            height: H,
            position: "relative",
          }}
        >

          <div className="webGLContainer">
            <CirclesViewer
              ref={(ref) => {this.circlesViewerRef = ref; }}
            />
          </div>

          <TextViewer
            ref={(ref) => {this.textViewerRef = ref; }}
          />

          <DividerLines
            dividerScale={3}
            ref={(ref) => {this.linesRef = ref; }}
          />

          <Logo
            ref={(ref) => {this.logoRef = ref; }}
          />

          <div
            className="fullscreenButton"
            onClick={this.toggleFullscreen}
            ref={(ref) => {this.fullscreenButtonRef = ref; }}
          >click to fullscreen</div>
        </div>
        </div>

        <style jsx>{`
          .cover {
            width:100vw;
            height:100vh;
            position:absolute;
            top:50%;
            left:50%;
          }

          .container {
            transform: translate(-50%,-50%);
          }

          .webGLContainer {
            width: 100%;
            height: 100%;
          }

          .fullscreenButton {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            background: rgba(0, 0, 0, 0.8);
            color: white;

            justify-content: center;
            align-items: center;
            font-size: 10vmin;

            display: none;
          }
        `}</style>
      </Global>
    );
  }
}
