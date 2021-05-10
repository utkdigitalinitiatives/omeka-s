import React, {Component} from 'react';
import Mirador from './components/Mirador';
import Config from "./components/Config";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            manifest: Config.Manifest,
            config: Config.Config,
            mode: Config.Mode,
        };
    }

    render() {
        const {mode, manifest, config} = this.state;

        console.log(this.state)

        if (mode === 'config') {
            return (
                <Mirador
                    config={config}
                    plugins={[]}
                />
            );
        } else if (mode === 'manifest') {
            return (
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
            );
        } else {
            return null
        }
    }
}

export default App;
