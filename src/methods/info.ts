import { type SolidInspectionInput } from '../base'
import { transporter } from '../transporting/transporter'
import { tconsole } from '../transporting/transports/console'

transporter.add(tconsole)

export default function info (msg: SolidInspectionInput) {
    transporter.handle(msg, 'info')
}
