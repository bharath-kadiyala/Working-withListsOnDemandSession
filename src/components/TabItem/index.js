import './index.css'

const TabItem = props => {
  const {tabDetails, getSpecificTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const addUnderScore = isActive ? `active-tab-btn` : null

  const sendSpecificTab = () => {
    getSpecificTab(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        onClick={sendSpecificTab}
        type="button"
        className={`${addUnderScore} tab-btn`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
