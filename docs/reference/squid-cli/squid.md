[//]: # (# squid)

[//]: # ()
[//]: # (The `squid` topic of the `sqd` command line interface is used to manage the deployment of your projects to the Squid SaaS hosted solution. Thanks to it, it's possible to:)

[//]: # ()
[//]: # (* create a new project)

[//]: # (* list deployed APIs an versions)

[//]: # (* create new versions of a project)

[//]: # (* update existing versions)

[//]: # (* shut down a deployed API)

[//]: # (* monitor the logs of a deployed API)

[//]: # ()
[//]: # (## Subcommands for `squid` command)

[//]: # ()
[//]: # (| Subcommand | Description                     | Arguments                                                                                                                                                                                                                                                                                                     |)

[//]: # (| ---------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |)

[//]: # (| `create`   | Create a squid                  | <p><code>[NAME]</code> squid name &#40;optional&#41;<br><br><code>-d</code>, <code>--description=</code> description<br><br><code>-l</code>, <code>--logo=</code> logo url <br><br><code>-w</code>, <code>--website=</code> website url</p>                                                                           |)

[//]: # (| `kill`     | Kill a squid or a squid version | `[NAMEANDVERSION]` squid `name` or `name@version`                                                                                                                                                                                                                                                             |)

[//]: # (| `ls`       | Squid or versions list          | <p><code>-n</code>, <code>--name=</code> squid name<br><br><code>-t</code>, <code>--truncate</code> truncate data in columns &#40;false by default&#41;</p>                                                                                                                                                           |)

[//]: # (| `release`  | Create a version                | <p><code>[NAMEANDVERSION]</code> squid <code>name</code> and version <code>name@version</code><br><code></code><br><code>-d</code>, <code>--description=</code> description<br> <br><code>-s</code>, <code>--source=</code> git URL of the source code</p>                                                    |)

[//]: # (| `tail`     | Getting logs about version      | <p><code>[NAMEANDVERSION]</code> squid name and version<code>name@version</code><br><code></code><br><code></code><code>-f</code>, <code>--follow</code> continue streaming new logs<br><br><code>-l</code>, <code>--lines=</code> [default: 50] output a specific number of lines &#40;if "follow" is false&#41;</p> |)

[//]: # (| `update`   | Update a version image          | <p><code>[NAMEANDVERSION]</code> squid name and version<code>name@version</code><br><br><code>-r</code>, <code>--hardReset</code> perform a hard reset &#40;db wipeout&#41; <br><br><code>-s</code>, <code>--source=</code> git URL of the source code</p>                                                            |)

[//]: # ()
[//]: # (## Examples)

[//]: # ()
[//]: # (#### Create a new squid)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid create squid-test)

[//]: # (```)

[//]: # ()
[//]: # (#### Kill a squid :sob: &#40;will remove it from the account&#41;)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid kill squid-test)

[//]: # (```)

[//]: # ()
[//]: # (#### List squids in an account)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid ls)

[//]: # (```)

[//]: # ()
[//]: # (#### List versions of a squid)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid ls -n squid-test)

[//]: # (```)

[//]: # ()
[//]: # (#### Release &#40;the kraken! :squid:&#41;)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid release squid-test@1 --source=git@github.com:subsquid/squid-template.git)

[//]: # (```)

[//]: # ()
[//]: # (#### Show logs of a squid)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid tail squid-test@1)

[//]: # (```)

[//]: # ()
[//]: # (#### Update a version with new code)

[//]: # ()
[//]: # (```)

[//]: # (sqd squid release squid-test@1 -r -s git@github.com:subsquid/squid-template.git)

[//]: # (```)

[//]: # ()
[//]: # (Some examples of how to use this command can be seen in the [Tutorial to deploy a Squid]&#40;../../tutorial/deploy-your-squid.md&#41;.)
