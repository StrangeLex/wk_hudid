ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

local vehicle = "false"

function Reload()
	ESX.TriggerServerCallback("wkhudid:set", function(data)
		local id = GetPlayerServerId(PlayerId())
            SendNuiMessage(json.encode{type = "base",
            id = data.id,
            Style = wikili202.Style,
            left = wikili202.left,
            top = wikili202.top,
            bordercolor = wikili202.bordercolor,
            circlecolor = wikili202.circlecolor,
        })
	end)
end


Citizen.CreateThread(function()
	while true do
		Reload()
		Wait(1000)
	end
end)