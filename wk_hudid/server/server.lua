ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

--[[
Script created by wikili202 (https://github.com/wikili202)
wikili202#5601
--]]


ESX.RegisterServerCallback("wkhudid:set", function(source, cb)
    local source = source
    local xPlayer = ESX.GetPlayerFromId(source)

    local data = {
        id = source,
    }

    cb(data)
end)
