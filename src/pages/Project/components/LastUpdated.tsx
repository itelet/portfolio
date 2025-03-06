import React from 'react'

const LastUpdated = ({ lastUpdate }: { lastUpdate: string }) => {
	return (
		<span className="text-[#585858] text-sm font-normal pt-2 pb-1">
              Last updated: {lastUpdate}
            </span>
	)
}

export default LastUpdated