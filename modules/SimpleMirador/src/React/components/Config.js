const Config = [];

const container = document.getElementById('simple-mirador');
const fields = {
    'manifest': container.getAttribute('data-manifest'),
};

Config.Manifest = fields.manifest;

/*
 * export URL string
 */

export default Config;
