import algosdk from 'algosdk';


const baseServer = 'https://testnet-algorand.api.purestake.io/ps2';
const port = '';

const token = {
   'X-API-Key': '8LtYbv0XMB6wBXhJ2dJPR6LUDDXyEZTUrrT97Daa '
}

// algod client
const algodclient = new algosdk.Algodv2(token, baseServer, port);
export default algodclient;