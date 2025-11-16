import './Screen.css'
import DesktopIcon from './DesktopIcon'

export default function Screen () {
  return (
    <div id="screen">
      <div id="desktop">
        <DesktopIcon />
      </div>
      <div id="taskbar">
        <div id="startButton"></div>
        <div id="appTray">
          <p>19:20</p>
        </div>
      </div>
    </div>
  )
}