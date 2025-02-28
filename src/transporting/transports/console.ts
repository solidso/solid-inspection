import { SolidInspectionTransport } from '../../base'
import { TransporterBase } from '../base'

class TransporterConsole extends TransporterBase {
    name = 'console'

    out(obj: SolidInspectionTransport) {
        const message = obj.msg
        const { msg, level, timestamp, ...rest } = obj

        console.log.apply(console, [
            '%c' + obj.timestamp + ' %c[' + obj.level.toUpperCase() + ']:',
            'color:gray;',
            'color:' + this.levelColorMap[obj.level] + ';',
            message,
            ...Object.values(rest)
        ])
    }
}

export const tconsole = new TransporterConsole()
