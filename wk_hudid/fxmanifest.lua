fx_version 'adamant'

game 'gta5'

shared_scripts {
	"config.lua"
}

server_scripts {
	"server/*.lua"	
}

client_scripts {
	"config.lua",
	"client/*.lua"
}

files {
	"ui/index.html",
	"ui/index.css",
	"ui/index.js"
}


ui_page 'ui/index.html'
