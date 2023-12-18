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

const getIncrementId = () => getLogs().length < 1 ? 1 : getLogs()[getLogs().length - 1].id + 1

const setLogs = logs => fs.writeFile("data/logs.json", JSON.stringify(logs), () => { })

export const saveLogs = (urgent, date, log, category, app_name) => {
   let logs = getLogs()
   if (!category) return console.log(`Missing field categori :  ${app_name} ${date}`, 'error')
   const id = getIncrementId()
   logs.push({id, urgent, date, log, category, app_name})
   setLogs(logs)
   console.log(`Terima kasih, Logs tersimpan : ${app_name} ${date}`, 'success')
}

export const removeLog = (id) => {
   const oldLogs = getAllLogs()
   const newLogs = oldLogs.filter(i => i.id!==parseInt(id))
   setLogs(newLogs)
   return oldLogs.filter(i => i.id===parseInt(id))
}

export const logsByUrgent = urgent => getLogs().filter(log => log.urgent===urgent)

export const logsByCategory = category => getLogs().filter(log => log.category===category)

export const logsByApps = appName => getLogs().filter(log => log.app_name===appName)

export const getAllLogs = () => getLogs()
