from rest_framework import serializers
from .models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
class VideoSerial(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['pk','thumbnail','title','user','upload_time','description']
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields='__all__'
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'



#  Below have chat application serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class ChatSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = ('id', 'participants')

class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer()

    class Meta:
        model = Message
        fields = ('id', 'chat', 'sender', 'content', 'timestamp')

class UserStatusSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserStatus
        fields = ('user', 'online')

class FriendSerializer(serializers.ModelSerializer):
    user1 = UserSerializer()
    user2 = UserSerializer()

    class Meta:
        model = Friend
        fields = ('user1', 'user2', 'status')

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ('user', 'email', 'profile_picture', 'phone_number')

class NotificationSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Notification
        fields = ('user', 'content', 'timestamp')

class BlockedUserSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    blocked_user = UserSerializer()

    class Meta:
        model = BlockedUser
        fields = ('user', 'blocked_user')

class ReportSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    reported_user = UserSerializer()

    class Meta:
        model = Report
        fields = ('user', 'reported_user', 'reason')

class GroupSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True, read_only=True)

    class Meta:
        model = GroupD
        fields = ('id', 'participants', 'name', 'created_at')

class GroupMessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer()

    class Meta:
        model = GroupMessage
        fields = ('id', 'group', 'sender', 'content', 'timestamp')