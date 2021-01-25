function getCommand(pagebuilder, cmd, propierties) {
  const command = {
    resource: `<resource>
<id>${cmd.split('.')[0]}</id>
<name>resource ${pagebuilder.name}</name>
<description>${pagebuilder.description}</description>
<properties>${propierties.map(
      (p) => `
<property name="${p.name}" pk="${p.pk}" type="${p.type}" description="${p.description}"/>`
    )}
</properties>
<actions>${pagebuilder.commands
      .filter((cmd) => cmd.split('.')[2] === 'action')
      .map(
        (cmd) => `
<action type="${cmd.split('.')[1]}" ref="${cmd.split('.')[0]}"/>`
      )}
</actions>
</resource>`,
    list_action: 'list action',
    edit_action: 'edit action',
    add_action: 'add action',
    delete_action: 'delete action',
    mcmd: `mcmd ${cmd}`
  }

  return command
}

export default getCommand
