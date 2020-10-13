import { MagentoBridge } from './bridge';
import { resolve } from 'path';
import { writeFileSync }  from 'fs';

const commerceBridge = new MagentoBridge();

async function start() {
  return await commerceBridge.orderService.get()
}

start()
  .then(data => data)
  .then(data => {
    console.log(data) 
    const dir = resolve(__dirname, 'exemplo', 'saida.json')
    writeFileSync(dir, JSON.stringify(data), { encoding: "utf-8" })
  })