fs = require("fs")
lang = "es"
readme = fs.readFileSync("./README.md").toString()
readme.split("\n# ").map ((content, index1) => fs.writeFileSync(`./doc/templates/components/markdown/es/page_${lang}_${index1}.md`,`# ${content}`))
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map ((content, index2) => fs.writeFileSync(`./doc/templates/components/markdown/es/page_${lang}_${index1}_${index2}.md`,`## ${content}`))  )
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map ((content, index3) => fs.writeFileSync(`./doc/templates/components/markdown/es/page_${lang}_${index1}_${index2}_${index3}.md`,`### ${content}`))  ) )
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map( (content3, index3) => content3.split("\n\#\#\#\# ").map ((content, index4) => fs.writeFileSync(`./doc/templates/components/markdown/es/page_${lang}_${index1}_${index2}_${index3}_${index4}.md`,`#### ${content}`))  ) ) )
