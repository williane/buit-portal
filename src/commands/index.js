function getCommand(pagebuilder, cmd, propierties) {
  const command = {
    resource: `<resource>
<id>${cmd.split('.')[0]}</id>
<name>resource ${pagebuilder.name}</name>
<description>${pagebuilder.description}</description>
<properties>${propierties.map(
      (p) => `
<property name="${p.name}" ${p.pk === 'true' ? `pk="${p.pk}"` : ''} type="${
        p.type
      }" description="${p.description}"/>`
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
    list_action: `<action>
<id>${cmd.split('.')[0]}</id>
<name>list ${pagebuilder.description}</name>
<description>${pagebuilder.description}</description>
<type>LIST</type>
<ws>
<method>GET</method>
<href>/${cmd.split('.')[0]}</href>
</ws>
<impl>
<command>dhl list ${pagebuilder.name}</command>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`,
    edit_action: `<action>
<id>${cmd.split('.')[0]}</id>
<name>edit ${pagebuilder.description}</name>
<description>${pagebuilder.description}</description>
<type>EDIT</type>
<ws>
<method>PUT</method>
<href>/${cmd.split('.')[0]}/{${propierties
      .filter((p) => p.pk === 'true')
      .map((p) => p.name)}}</href>
</ws>
<impl>
<command>dhl edit ${pagebuilder.name}</command>
<arguments>${propierties
      .filter((p) => p.pk === 'true')
      .map(
        (p) => `
<argument name="${p.name}" type="${p.type}" required="true" location="path"/>`
      )}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`,
    add_action: `<action>
<id>${cmd.split('.')[0]}</id>
<name>add ${pagebuilder.description}</name>
<description>${pagebuilder.description}</description>
<type>ADD</type>
<ws>
<method>POST</method>
<href>/${cmd.split('.')[0]}</href>
</ws>
<impl>
<command>dhl add ${pagebuilder.name}</command>
<arguments>${propierties
      .filter((p) => p.pk === 'true')
      .map(
        (p) => `
<argument name="${p.name}" type="${p.type}" required="true" location="query"/>`
      )}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`,
    delete_action: `<action>
<id>${cmd.split('.')[0]}</id>
<name>delete ${pagebuilder.description}</name>
<description>${pagebuilder.description}</description>
<type>DELETE</type>
<ws>
<method>DELETE</method>
<href>/${cmd.split('.')[0]}/{${propierties
      .filter((p) => p.pk === 'true')
      .map((p) => p.name)}}</href>
</ws>
<impl>
<command>dhl delete ${pagebuilder.name}</command>
<arguments>${propierties
      .filter((p) => p.pk === 'true')
      .map(
        (p) => `
<argument name="${p.name}" type="${p.type}" required="true" location="path"/>`
      )}
</arguments>
</impl>
<auth>
<opt>optOpen</opt>
</auth>
</action>`,
    mcmd: `<command>
<name>${cmd.split('.')[0].replace(new RegExp(['_'], 'g'), ' ')}</name>
<description>${pagebuilder.description}</description>
<type>Local Syntax</type>
<local-syntax>
<![CDATA[

]]>
</local-syntax>
</command>`
  }

  return command
}

export default getCommand
