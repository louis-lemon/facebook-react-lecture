import React from 'react';
import styled from 'styled-components';
import { SMixinFlexRow, SMixinFlexColumn } from '../styled/mixins';
import mouseEventSubscribe from '../utils/mouseEventSubscribe';

const Container = styled.div`
  height: 100vh;
  ${SMixinFlexRow('stretch', 'stretch')};

  [data-panel] {
    flex: 1;
    ${SMixinFlexColumn('center', 'center')};
    background: #eee;
    font-size: 24px;
    color: #000;
  }

  [data-resizer='ew'] {
    width: 1px;
    background: #000;
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 9px;
      height: 100%;
      left: -4px;
      top: 0;
      background: rgba(255, 0, 0, 0.3);
      cursor: ew-resize;
    }
    &.resizing {
    }
  }
`;

interface IProps {}

interface IState {
  panelAGrow?: number;
  panelBGrow?: number;
  resizing?: boolean;
}

class PanelResize extends React.Component<IProps, IState> {
  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      panelAGrow: 1,
      panelBGrow: 1,
      resizing: false,
    };
    this.containerRef = React.createRef();
  }

  handleResizerMove = (e: React.MouseEvent) => {
    if (!this.containerRef.current) {
      return;
    }

    const {
      left: containerLeft,
    } = this.containerRef.current.getBoundingClientRect(); // 시작점이 달라질 수 있기 때문에, left를 가져와야 한다.

    const panelA = this.containerRef.current.querySelector('[data-panel="A"]');
    const panelB = this.containerRef.current.querySelector('[data-panel="B"]');
    if (!panelA || !panelB) {
      return;
    }
    const panelsWidth = panelA.clientWidth + panelB.clientWidth + 1;

    mouseEventSubscribe(
      mpos => {
        const panelAGrow = ((mpos.clientX - containerLeft) / panelsWidth) * 2;
        const panelBGrow = 2 - panelAGrow;
        this.setState({
          panelAGrow,
          panelBGrow,
        });
      },
      () => {}
    );
  };

  render() {
    const { panelAGrow, panelBGrow, resizing } = this.state;
    return (
      <Container ref={this.containerRef}>
        <div data-panel="A" style={{ flexGrow: panelAGrow }}>
          <p>A ({panelAGrow})</p>
        </div>
        <div
          data-resizer="ew"
          draggable={false}
          onMouseDown={this.handleResizerMove}
          className={resizing ? 'resizing' : ''}
        />
        <div data-panel="B" style={{ flexGrow: panelBGrow }}>
          <p>B ({panelBGrow})</p>
        </div>
      </Container>
    );
  }
}

export default PanelResize;
