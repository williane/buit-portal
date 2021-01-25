function getCommand(pagebuilder) {
  const command = {
    resource: 'resource',
    list_action: 'list action',
    edit_action: 'edit action',
    add_action: 'add action',
    delete_action: 'delete action',
    mcmd: `mcmd ${pagebuilder.commands[4]}`
  }

  return command
}

export default getCommand
