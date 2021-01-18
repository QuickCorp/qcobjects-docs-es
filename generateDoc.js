fs = require("fs")
require("qcobjects")
lang = "es"
readme = fs.readFileSync("./README.md").toString()


function writeContent (lang, index, content, level){
  routingpath = content.split("\n")[0].split("# ")[1].toLowerCase().replace(/\s/g,"-").replace(":","")
  routingpath = routingpath.replace("\(","").replace("\)","")
  routingpath = routingpath.replace(/(á|é|í|ó|ú)/g,"")
  routingpath = routingpath.replace(".","")
  routingpath = encodeURI(routingpath)
  rtext = `<routing path="^#${routingpath}$" name="markdown/${lang}/page_${lang}_${index}"></routing>`

  fs.appendFileSync(`./doc/templates/components/markdown/${lang}/routings.tpl.html`, `${rtext}\n`);

  fs.writeFileSync(`./doc/templates/components/markdown/${lang}/page_${lang}_${index}.md`,`${content}`);
}

readme.split("\n# ").map ((content, index1) => writeContent(lang, `${index1}`, `# ${content}` , 1))
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map ((content, index2) => writeContent(lang, `${index1}_${index2}`, `## ${content}`,2 )  )  )
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map ((content, index3) => writeContent(lang, `${index1}_${index2}_${index3}`, `### ${content}` , 3 ) )  ) )
readme.split("\n# ").map( (content1, index1) => content1.split("\n\#\# ").map( (content2, index2) => content2.split( "\n\#\#\# " ).map( (content3, index3) => content3.split("\n\#\#\#\# ").map ((content, index4) => writeContent(lang, `${index1}_${index2}_${index3}_${index4}`, `#### ${content}` , 4 ) )  ) ) )
