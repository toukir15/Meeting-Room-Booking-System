import { connect } from 'mongoose'
import config from './app/config'
import app from './app'
// const port = 3000;

async function run() {
  try {
    // 4. Connect to MongoDB

    await connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
run()
