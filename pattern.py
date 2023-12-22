def even(n,m):
    print(' '*m+'*'*n)
def odd(n,m):
    print(' '*m+'*'*n)
def printing(n,c,m):
    if n<=0:
        return
    c+=1
    if c%2==0 and not c==0:
        if not n==2:
            m=n//2
        else:
            m=2
    printing(n//2,c,m)
    if c==0:
        print('*'*n)
    elif c%2==0:
        even(n,m)
    else:
        odd(n,m)
printing(16,-1,0)