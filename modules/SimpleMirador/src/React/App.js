import React, {Component} from 'react';
import Mirador from './components/Mirador';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manifest: null,
            config: null,
            mode: null,
        };
    }

    componentDidMount() {
        const container = document.getElementById(this.props.blockId);
        this.setState({
            manifest: container.getAttribute('data-manifest'),
            config: container.getAttribute('data-config'),
            mode: container.getAttribute('data-mode'),
        })
    }

    parseWindows (instance) {
        return  Object.keys(instance).map(function(key, index) {
            delete instance[key].companionWindowIds
            return instance[key]
        });
    }

    render() {
        const {mode, manifest, config} = this.state;
        if (mode === 'config') {
            let workspace = JSON.parse(JSON.parse(config))
            return (
                <Mirador
                    config={{
                        id: this.props.blockId,
                        windows: this.parseWindows(workspace.windows),
                        workspaceControlPanel: {
                            enabled: false,
                        },
                    }}
                    plugins={[]}
                />
            );
        } else if (mode === 'manifest') {
            return (
                <Mirador
                    config={{
                        id: this.props.blockId,
                        window: {
                            allowFullscreen: false,
                            sideBarOpen: true,
                            highlightAllAnnotations: true,
                            forceDrawAnnotations: true,
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
