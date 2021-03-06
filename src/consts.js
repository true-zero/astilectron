'use strict'

module.exports = {
    callbackNames: {
        webContentsLogin: "web.contents.login",
        webContentsMessage: "web.contents.message",
        webContentsInterceptStringProtocol: "web.contents.intercept.string.protocol",
    },
    eventNames: {
        appCmdQuit: "app.cmd.quit",
        appEventReady: "app.event.ready",
        appEventSecondInstance: "app.event.second.instance",
        displayEventAdded: "display.event.added",
        displayEventMetricsChanged: "display.event.metrics.changed",
        displayEventRemoved: "display.event.removed",
        dockCmdBounce: "dock.cmd.bounce",
        dockCmdBounceDownloads: "dock.cmd.bounce.downloads",
        dockCmdCancelBounce: "dock.cmd.cancel.bounce",
        dockCmdHide: "dock.cmd.hide",
        dockCmdSetBadge: "dock.cmd.set.badge",
        dockCmdSetIcon: "dock.cmd.set.icon",
        dockCmdShow: "dock.cmd.show",
        dockEventBadgeSet: "dock.event.badge.set",
        dockEventBouncing: "dock.event.bouncing",
        dockEventBouncingCancelled: "dock.event.bouncing.cancelled",
        dockEventDownloadsBouncing: "dock.event.download.bouncing",
        dockEventHidden: "dock.event.hidden",
        dockEventIconSet: "dock.event.icon.set",
        dockEventShown: "dock.event.shown",
        ipcCmdLog: "ipc.cmd.log",
        ipcCmdMessage: "ipc.cmd.message",
        ipcCmdMessageCallback: "ipc.cmd.message.callback",
        ipcEventMessage: "ipc.event.message",
        ipcEventMessageCallback: "ipc.event.message.callback",
        menuCmdCreate: "menu.cmd.create",
        menuCmdDestroy: "menu.cmd.destroy",
        menuEventCreated: "menu.event.created",
        menuEventDestroyed: "menu.event.destroyed",
        menuItemCmdSetChecked: "menu.item.cmd.set.checked",
        menuItemCmdSetEnabled: "menu.item.cmd.set.enabled",
        menuItemCmdSetLabel: "menu.item.cmd.set.label",
        menuItemCmdSetVisible: "menu.item.cmd.set.visible",
        menuItemEventCheckedSet: "menu.item.event.checked.set",
        menuItemEventClicked: "menu.item.event.clicked",
        menuItemEventEnabledSet: "menu.item.event.enabled.set",
        menuItemEventLabelSet: "menu.item.event.label.set",
        menuItemEventVisibleSet: "menu.item.event.visible.set",
        notificationCmdCreate: "notification.cmd.create",
        notificationCmdShow: "notification.cmd.show",
        notificationEventActioned: "notification.event.actioned",
        notificationEventClicked: "notification.event.clicked",
        notificationEventClosed: "notification.event.closed",
        notificationEventCreated: "notification.event.created",
        notificationEventReplied: "notification.event.replied",
        notificationEventShown: "notification.event.shown",
        sessionCmdClearCache: "session.cmd.clear.cache",
        sessionCmdFlushStorage: "session.cmd.flush.storage",
        sessionEventClearedCache: "session.event.cleared.cache",
        sessionEventWillDownload: "session.event.will.download",
        sessionEventFlushedStorage: "session.event.flushed.storage",
        subMenuCmdAppend: "sub.menu.cmd.append",
        subMenuCmdClosePopup: "sub.menu.cmd.close.popup",
        subMenuCmdInsert: "sub.menu.cmd.insert",
        subMenuCmdPopup: "sub.menu.cmd.popup",
        subMenuEventAppended: "sub.menu.event.appended",
        subMenuEventClosedPopup: "sub.menu.event.closed.popup",
        subMenuEventInserted: "sub.menu.event.inserted",
        subMenuEventPoppedUp: "sub.menu.event.popped.up",
        trayCmdCreate: "tray.cmd.create",
        trayCmdDestroy: "tray.cmd.destroy",
        trayCmdSetImage: "tray.cmd.set.image",
        trayEventClicked: "tray.event.clicked",
        trayEventCreated: "tray.event.created",
        trayEventDestroyed: "tray.event.destroyed",
        trayEventDoubleClicked: "tray.event.double.clicked",
        trayEventImageSet: "tray.event.image.set",
        trayEventRightClicked: "tray.event.right.clicked",
        webContentsEventLogin: "web.contents.event.login",
        webContentsEventLoginCallback: "web.contents.event.login.callback",
        webContentsEventInterceptStringProtocol: "web.contents.event.intercept.string.protocol",
        webContentsEventInterceptStringProtocolCallback: "web.contents.event.intercept.string.protocol.callback",
        windowCmdBlur: "window.cmd.blur",
        windowCmdCenter: "window.cmd.center",
        windowCmdClose: "window.cmd.close",
        windowCmdCreate: "window.cmd.create",
        windowCmdDestroy: "window.cmd.destroy",
        windowCmdFocus: "window.cmd.focus",
        windowCmdHide: "window.cmd.hide",
        windowCmdLog: "window.cmd.log",
        windowCmdMaximize: "window.cmd.maximize",
        windowCmdMessage: "window.cmd.message",
        windowCmdMessageCallback: "window.cmd.message.callback",
        windowCmdMinimize: "window.cmd.minimize",
        windowCmdMove: "window.cmd.move",
        windowCmdResize: "window.cmd.resize",
        windowCmdSetBounds: "window.cmd.set.bounds",
        windowCmdRestore: "window.cmd.restore",
        windowCmdShow: "window.cmd.show",
        windowCmdLoadUrl: "window.cmd.load.url",
        windowCmdUnmaximize: "window.cmd.unmaximize",
        windowCmdUpdateCustomOptions: "window.cmd.update.custom.options",
        windowCmdWebContentsCloseDevTools: "window.cmd.web.contents.close.dev.tools",
        windowCmdWebContentsOpenDevTools: "window.cmd.web.contents.open.dev.tools",
        windowCmdWebContentsExecuteJavascript: "window.cmd.web.contents.execute.javascript",
        windowCmdWebContentsInterceptStringProtocol: "window.cmd.web.contents.intercept.string.protocol",
        windowCmdWebContentsSetProxy: "window.cmd.web.contents.set.proxy",
        windowEventBlur: "window.event.blur",
        windowEventClosed: "window.event.closed",
        windowEventDidFinishLoad: "window.event.did.finish.load",
        windowEventDidGetRedirectRequest: "window.event.did.get.redirect.request",
        windowEventWillNavigate: "window.event.will.navigate",
        windowEventFocus: "window.event.focus",
        windowEventHide: "window.event.hide",
        windowEventMaximize: "window.event.maximize",
        windowEventMessage: "window.event.message",
        windowEventMessageCallback: "window.event.message.callback",
        windowEventMinimize: "window.event.minimize",
        windowEventMove: "window.event.move",
        windowEventReadyToShow: "window.event.ready.to.show",
        windowEventResize: "window.event.resize",
        windowEventRestore: "window.event.restore",
        windowEventShow: "window.event.show",
        windowEventUnmaximize: "window.event.unmaximize",
        windowEventUnresponsive: "window.event.unresponsive",
        windowEventLoadedUrl: "window.event.loaded.url",
        windowEventWebContentsExecutedJavaScript: "window.event.web.contents.executed.javascript",
        windowEventWebContentsSetProxy: "window.event.web.contents.set.proxy",
        windowEventWebContentsInterceptStringProtocol: "window.event.web.contents.intercept.string.protocol",
        windowEventUpdatedCustomOptions: "window.event.updated.custom.options"
    },
    targetIds: {
        app: 'app',
        dock: 'dock'
    }
}
