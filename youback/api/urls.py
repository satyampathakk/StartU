from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
urlpatterns= [
    #to create user and assign token
    path('',Api.as_view(),name='index'),

    #to create youtube and its feature
    # UserProfile views
    path('user-profiles/', UserProfileListView.as_view(), name='user-profile-list'),
    path('user-profiles/<int:pk>/', UserProfileDetailView.as_view(), name='user-profile-detail'),

    # Video views
    path('videos/', VideoListView.as_view(), name='video-list'),
    path('videos/<int:pk>/', VideoDetailView.as_view(), name='video-detail'),

    # Like views
    path('likes/', LikeListView.as_view(), name='like-list'),
    path('likes/<int:pk>/', LikeDetailView.as_view(), name='like-detail'),

    # Comment views
    path('comments/', CommentListView.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetailView.as_view(), name='comment-detail'),

    # Subscription views
    path('subscriptions/', SubscriptionListView.as_view(), name='subscription-list'),
    path('subscriptions/<int:pk>/', SubscriptionDetailView.as_view(), name='subscription-detail'),

    # View views
    path('views/', ViewListView.as_view(), name='view-list'),
    path('views/<int:pk>/', ViewDetailView.as_view(), name='view-detail'),

    # Playlist views
    path('playlists/', PlaylistListView.as_view(), name='playlist-list'),
    path('playlists/<int:pk>/', PlaylistDetailView.as_view(), name='playlist-detail'),

    # Tag views
    path('tags/', TagListView.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetailView.as_view(), name='tag-detail'),



    #steaming path
    path('api/video/<int:video>/',stream_video, name='playback'),
    
    #Here chatting app links
    
    path('notifications/', NotificationListView.as_view(), name='notification-list'),
    path('notifications/<int:notification_id>/', NotificationDetailView.as_view(), name='notification-detail'),

    path('blocked-users/', BlockedUserListView.as_view(), name='blocked-user-list'),

    path('reports/', ReportListView.as_view(), name='report-list'),

    path('groups/', GroupListView.as_view(), name='group-list'),
    path('groups/<int:group_id>/', GroupDetailView.as_view(), name='group-detail'),

    path('groups/<int:group_id>/messages/', GroupMessageListView.as_view(), name='group-message-list'),
    path('groups/<int:group_id>/messages/<int:message_id>/', GroupMessageDetailView.as_view(), name='group-message-detail'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
