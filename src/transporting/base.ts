import { SolidInspectionTransport } from '../base'

export class TransporterBase {
    name = 'base'
    levelColorMap = {
        'debug': 'gray',
        'info': 'blue',
        'warn': 'orange',
        'error': 'red'
    }
    out(obj: SolidInspectionTransport) {}
}
