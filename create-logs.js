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

export const saveLogs = (date, logs, category) => {
   let logs = getContacts()
   if (!category) {
      console.log(
         write("Missing field categori", 'error')
      )
      return false
   }

   logs.push({ name, email, noHp })
   fs.writeFile("data/logs.json", JSON.stringify(logs), () => { })
   console.log(write(`Terima kasih, Logs tersimpan ${date}`, 'success'))
}

export const getAllLogs = () => getLogs()
