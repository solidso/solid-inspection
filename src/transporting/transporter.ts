import {
    SolidInspectionInput, SolidInspectionLevel, SolidInspectionTransport
} from '../base'
import { TransporterBase } from './base'

class Transporter {
    private transports: TransporterBase[] = []

    format(input: SolidInspectionInput, level: SolidInspectionLevel): SolidInspectionTransport {
        return Object.assign({},
            typeof input === 'string'
                ? { msg: input, level }
                : input instanceof Error
                    ? { msg: input.message, level, err: input }
                    : input,
            { timestamp: new Date().toISOString(), level }
        )
    }

    handle(input: SolidInspectionInput, level: SolidInspectionLevel) {
        const obj = this.format(input, level)
        this.transports.map((t) => t.out(obj))
    }

    add(obj: TransporterBase) {
        if (this.transports.some((t) => t.name === obj.name)) {
            return
        }
        this.transports.push(obj)
    }
}

export const transporter = new Transporter()