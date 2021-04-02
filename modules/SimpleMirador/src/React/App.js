import React, { Component } from 'react';
import Mirador from './components/Mirador';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manifest: 'https://digital.lib.utk.edu/assemble/manifest/heilman/600',
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
