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

const getLastId = () => {
   if (getLogs().length < 1) return 1
   return getLogs()[getLogs().length - 1].id + 1
}

const setLogs = (logs) => {
   fs.writeFile("data/logs.json", JSON.stringify(logs), () => { })
   console.log(`Terima kasih, Logs tersimpan ${date}`, 'success')
}

export const saveLogs = (urgent, date, log, category, app_name) => {
   let logs = getLogs()
   if (!category) {
      console.log(
         "Missing field categori", 'error'
      )
      return false
   }
   const id = getLastId()
   logs.push({id, urgent, date, log, category, app_name})
   setLogs(logs)
}

export const removeLog = (id) => {
   const oldLogs = getAllLogs()
   const newLogs = oldLogs.filter(i => i.id!==id)
   setLogs(newLogs)
   return oldLogs[oldLogs.map(l=>l.id).indexOf(id)]
}

export const logsByUrgent = urgent => getLogs().filter(log => log.urgent===urgent)

export const logsByCategory = category => getLogs().filter(log => log.category===category)

export const logsByApps = appName => getLogs().filter(log => log.app_name===appName)

export const getAllLogs = () => getLogs()
