const Config = [];

const container = document.getElementById('simple-mirador');
const fields = {
    'manifest': container.getAttribute('data-manifest'),
    'config': container.getAttribute('data-config'),
    'mode': container.getAttribute('data-mode'),
};

Config.Manifest = fields.manifest;
Config.Config = obj;
Config.Mode = fields.mode;

/*
 * export URL string
 */

export default Config;
