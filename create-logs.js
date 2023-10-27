import fs from 'fs'

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath)
}

const filePath = './data/logs.json'
if (!fs.existsSync(filePath)) {
   fs.writeFileSync(filePath, "[]", 'utf-8')
}

const getLogs = () => JSON.parse(fs.readFileSync("data/logs.json", "utf-8"))

export const saveLogs = (date, log, category) => {
   let logs = getLogs()
   if (!category) {
      console.log(
         "Missing field categori", 'error'
      )
      return false
   }

   logs.push({ date, log, category })
   fs.writeFile("data/logs.json", JSON.stringify(logs), () => { })
   console.log(`Terima kasih, Logs tersimpan ${date}`, 'success')
}

export const getAllLogs = () => getLogs()
