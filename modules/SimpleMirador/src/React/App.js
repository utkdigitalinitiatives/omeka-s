import React, { Component } from 'react';
import Mirador from './components/Mirador';
import Config from "./components/Config";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manifest: Config.Manifest,
    };
  }

  render() {
    const { manifest } = this.state;
    return (
      <div className="container">
        <Mirador
          config={{
            id: 'mirador',
            window: {
              allowFullscreen: false,
              sideBarPanel: 'info',
              hideWindowTitle: false,
              sideBarOpen: true,
              highlightAllAnnotations: true,
              forceDrawAnnotations: true,
              defaultSidebarPanelWidth: 300,
            },
            windows: [
              {
                loadedManifest: manifest,
              },
            ],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
      </div>
    );
  }
}

export default App;
