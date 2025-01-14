const config = require('./config')

const NOTIFICATIONS_TOPIC = 'notifications.action.create'

const EVENT_ORIGINATOR = 'topcoder-timeline-api'
const EVENT_MIME_TYPE = 'application/json'

const NotificationTypes = {
    EVENT_APPROVED: 'timeline.notifications.event-approve',
    EVENT_REJECTED: 'timeline.notifications.event-rejected',
    EVENT_CREATED: 'timeline.notifications.event-created',
}

const NotificationSettings = {
    [NotificationTypes.EVENT_APPROVED]: {
        sendgridTemplateId: config.EMAIL.SENDGRID_TEMPLATES.EVENT_APPROVED,
        cc: []
    },
    [NotificationTypes.EVENT_REJECTED]: {
        sendgridTemplateId: config.EMAIL.SENDGRID_TEMPLATES.EVENT_REJECTED,
        cc: []
    },
    [NotificationTypes.EVENT_CREATED]: {
        sendgridTemplateId: config.EMAIL.SENDGRID_TEMPLATES.EVENT_CREATED,
        cc: []
    },
}

module.exports = {
    NOTIFICATIONS_TOPIC,
    EVENT_ORIGINATOR,
    EVENT_MIME_TYPE,
    NotificationSettings,
    NotificationTypes
}
