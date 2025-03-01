# solid-inspection
[![NPM Version](https://img.shields.io/npm/v/@solidso/inspection.svg?style=flat)](https://www.npmjs.com/package/@solidso/inspection)
![](https://img.shields.io/npm/dm/@solidso/inspection.svg?style=flat)

Dev mode, frontend logging library for solid.js

A small logging utility for frontend development in solid.js. It prints nothing in non-dev environments.

![Screenshot of the library in action](https://github.com/solidso/solid-inspection/blob/main/assets/screenshot1.png?raw=true)

## Usage
Install:
```shell
pnpm add @solidso/inspection
```

Import the relevant logging method:
```ts
import { info, debug, warn, error } from '@solidso/inspection'

debug('The identifier is 1')
info('Loaded local storage.')
error(new Error('Failed to fetch data.'))
warn({ msg: 'This is a warning.' })
```

These functions won't produce any output based on the following condition:
```ts
import { DEV } from 'solid-js'
import { isServer } from 'solid-js/web'

const isActive = (DEV && !isServer) || import.meta.env['VITE_SOLID_INSPECTION']
```

## Contributing
If you're interested in contributing, read the [CONTRIBUTING.md](https://github.com/muratgozel/muratgozel/blob/main/CONTRIBUTING.md) first, please.

---

Thanks for the attention 💙 Any amount of support on [patreon](https://patreon.com/muratgozel?utm_medium=organic&utm_source=github_repo&utm_campaign=github&utm_content=join_link) or [github](https://github.com/sponsors/muratgozel) will return you back as bug fixes, new features and bits and bytes.
