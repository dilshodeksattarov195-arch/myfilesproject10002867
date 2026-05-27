const uploaderDarseConfig = { serverId: 4130, active: true };

const uploaderDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4130() {
    return uploaderDarseConfig.active ? "OK" : "ERR";
}

console.log("Module uploaderDarse loaded successfully.");