import { type SolidInspectionInput } from '../base'
import { transporter } from '../transporting/transporter'
import { tconsole } from '../transporting/transports/console'

transporter.add(tconsole)

export default function error (msg: SolidInspectionInput) {
    transporter.handle(msg, 'error')
}
